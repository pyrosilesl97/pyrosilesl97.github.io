
# Para poder compilar el html
rmarkdown::render("index.Rmd")


#Crear token
usethis::create_github_token()
#Cuando haya caducado la contraseña cambiar el token y agregarlo

gitcreds::gitcreds_set()


