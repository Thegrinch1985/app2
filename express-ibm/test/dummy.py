

import pymongo

from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017')


db = client['ibm_test']

repos = db.repos

repo = {
    'title': 'Python and MongoDB',
    'content': 'PyMongo is fun, you guys',
    'author': 'Howie'
}   

result = repos.insert_one(repo)

print('One Post: {0}.format(result.inserted_id')


post_1 = {
    'title': 'Python and MongoDB',
    'content': 'PyMongo is fun, you guys',
    'author': 'Scott'
}
post_2 = {
    'title': 'Virtual Environments',
    'content': 'Use virtual environments, you guys',
    'author': 'Scott'
}
post_3 = {
    'title': 'Learning Python',
    'content': 'Learn Python, it is easy',
    'author': 'Bill'
}
new_result = repos.insert_many([post_1, post_2, post_3])
print('Multiple posts: {0}'.format(new_result.inserted_ids))


bills_post = repos.find_one({'author': 'Bill'})
print(bills_post)

scotts_posts = repos.find({'author': 'Scott'})
print(scotts_posts)


for post in scotts_posts:
    print(post)


