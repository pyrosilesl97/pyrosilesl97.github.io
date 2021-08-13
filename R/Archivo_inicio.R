#Para inicializar Github
library(gert)
library(gh)
library(gitcreds)
library(usethis)
library(fontawesome)

gert::git_commit_all('Problems in education data')
gert::git_push()

#Para procesar el resultado en html
rmarkdown::render("index.Rmd")
