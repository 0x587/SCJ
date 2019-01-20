from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

base = declarative_base()
engine = create_engine(r'sqlite:///DataBase/SCJ.db')
Session = sessionmaker(bind=engine)
# 创建Session类实例
session = Session()


def create_all_class():
    base.metadata.create_all(engine)
