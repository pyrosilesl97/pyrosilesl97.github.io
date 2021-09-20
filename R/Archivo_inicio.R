
# Para poder compilar el html
rmarkdown::render("index.Rmd")


#Crear token
usethis::create_github_token()
#Cuando haya caducado la contraseña
gitcreds::gitcreds_set()

usethis::use_github()
