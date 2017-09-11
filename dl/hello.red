Red []
site: "http://red-lang.org"
print ["Lendo a página:" site] 
page: read to-url site  
print "Recuperando o título da página."
parse page [thru <title> copy tit to </title> (print ["Titulo:" tit])] 
print "Feito o carreto."
