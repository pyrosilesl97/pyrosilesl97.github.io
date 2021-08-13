#Para inicializar Github
library(gert)
library(gh)
library(gitcreds)
library(usethis)
library(fontawesome)


#Para procesar el resultado en html
rmarkdown::render("index.Rmd")

#To push data if the files are commited
gert::git_commit_all('Problems in education data')
gert::git_push()
