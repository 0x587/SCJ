import xlrd
from SCJ.Menmbers import Score, Student, Class, School
from SCJ.MyDB import session


class Loader:
    def __init__(self, file_path):
        self.workbook = xlrd.open_workbook(file_path)
        self.lk_sheet = self.workbook.sheet_by_name('理科')
        self.wk_sheet = self.workbook.sheet_by_name('文科')
        self.sheets = [self.lk_sheet, self.wk_sheet]
        self.schools = [School('梧高')]
        self.classes = []
        self.students = []
        self.scores = []
        self.data_load()

    def __student_load(self):
        for sheet in self.sheets:
            for row_index in range(1, sheet.nrows):
                work_row = sheet.row_values(row_index)
                score = Score()
                score.chinese = work_row[3]
                score.match = work_row[5]
                score.english = work_row[7]
                if sheet is self.lk_sheet:
                    score.physics = work_row[9]
                    score.chemistry = work_row[11]
                    score.biology = work_row[13]
                if sheet is self.wk_sheet:
                    score.politics = work_row[9]
                    score.history = work_row[11]
                    score.geography = work_row[13]
                student = Student(work_row[2], work_row[0])
                student.scores = []
                student.scores.append(score)
                self.scores.append(score)
                self.students.append(student)

        for std in self.students:
            session.add(std)

    def __class_load(self):
        for sheet in self.sheets:
            class_index_list = sheet.col_values(1)
            class_index_list = list(set(class_index_list))
            del class_index_list[class_index_list.index('班级')]
            for class_Index in class_index_list:
                work_class = Class(class_Index)
                work_students = session.query(Student).filter(Student.student_id.like(str(class_Index) + '%')).all()
                work_class.students = []
                for work_student in work_students:
                    work_class.students.append(work_student)
                self.classes.append(work_class)
        for cla in self.classes:
            session.add(cla)

    def __school_load(self):
        work_school = School('梧高')
        work_school.classes = []
        for work_class in self.classes:
            work_school.classes.append(work_class)
        session.add(work_school)

    def data_load(self):
        self.__student_load()
        session.commit()
        self.__class_load()
        session.commit()
        self.__school_load()
        session.commit()


loader = Loader(r'data\data.xls')
