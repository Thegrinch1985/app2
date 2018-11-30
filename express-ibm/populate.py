import pymongo

from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017')


db = client['ibm_test']

repos = db.repos

repo_1 = {
    'name': 'Java',
    'version': 'https://www.tecmint.com/learn-vi-and-vim-editor-tips-and-tricks-in-linux/',
    'type': 'Java'
}
repo_2 = {
    'name': 'C#',
    'version': 'https://www.configserverfirewall.com/ubuntu-linux/install-python-idle-ubuntu-16/',
    'type': 'c#'
}
repo_3 = {
    'name': 'Learning Python',
    'version': 'https://www.tecmint.com/best-python-ides-for-linux-programmers/',
    'type': 'Python'
}
new_result = repos.insert_many([repo_1, repo_2, repo_3])
print('Multiple posts: {0}'.format(new_result.inserted_ids))




