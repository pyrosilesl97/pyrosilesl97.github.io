#Para inicializar Github
library(gert)
library(gh)
library(gitcreds)
library(usethis)
library(fontawesome)

gert::git_commit_all('I added ORCID to the logos')
git_push()
