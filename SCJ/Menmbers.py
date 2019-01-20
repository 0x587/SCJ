from sqlalchemy import Column, String, Integer, ForeignKey, PickleType, Float
from sqlalchemy.orm import relationship
from SCJ.MyDB import base, create_all_class


class School(base):
    __tablename__ = 'schools'

    school_id = Column(Integer, primary_key=True, autoincrement=True)
    school_name = Column(String(50))
    classes = relationship('Class', backref='school')

    def __init__(self, name):
        self.school_name = name

    def __repr__(self):
        return 'Name:%s' % self.school_name


class Class(base):
    __tablename__ = 'classes'

    class_id = Column(Integer, primary_key=True, autoincrement=True)
    class_name = Column(Integer)
    school_id = Column(Integer, ForeignKey('schools.school_id'))
    students = relationship('Student', backref='class')

    def __init__(self, class_name):
        self.class_name = class_name

    def __repr__(self):
        return 'Class:' + str(self.class_name)


class Student(base):
    __tablename__ = 'students'

    student_id = Column(Integer, primary_key=True)
    student_name = Column(String(10))
    class_id = Column(Integer, ForeignKey('classes.class_id'))
    scores = relationship('Score', backref='student')

    def __init__(self, name, student_id):
        self.student_name = name
        self.student_id = student_id

    def __repr__(self):
        return 'Name:%s Id:%s' % (self.student_name, self.student_id)


class Score(base):
    __tablename__ = 'scores'

    score_id = Column(Integer, primary_key=True, autoincrement=True)
    test_name = Column(String(20))
    chinese = Column(Float)
    match = Column(Float)
    english = Column(Float)
    physics = Column(Float)
    chemistry = Column(Float)
    biology = Column(Float)
    geography = Column(Float)
    politics = Column(Float)
    history = Column(Float)
    scores_dict_python_class = Column(PickleType)
    student_id = Column(String(10), ForeignKey('students.student_id'))

    def __repr__(self):
        back_str = '语文:%s 数学:%s 英语:%s ' % (str(self.chinese), str(self.match), str(self.english))
        if self.physics is None:
            back = '政治:%s 历史:%s 地理:%s ' % (str(self.politics), str(self.history), str(self.geography))
        else:
            back = '物理:%s 化学:%s 生物:%s ' % (str(self.physics), str(self.chemistry), str(self.biology))
        back_str += back
        return back_str


create_all_class()
