
import os 

class Base(object):
    APPLICATION_DIR = os.path.dirname(os.path.realpath(__file__))
    SQLALCHEMY_DATABASE_URI = 'sqlite:///%s/blog.db' % APPLICATION_DIR
    DEBUG = True
    SECRET_KEY = 'secret!'

class Production(Base):
    DEBUG = False

class Development(Base):
    pass