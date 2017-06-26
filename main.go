package main

import "net/http"
import "html/template"
import "dbConnect"
import "strconv"

type indexPage struct {
	Content template.HTML
	CategoryMenu template.HTML
}

func index(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-type", "text/html")
 
	t, _ := template.ParseFiles("index.html")

	t.Execute(w, &indexPage{Content: template.HTML(createProductDivs()), CategoryMenu: template.HTML(createCategoryMenu())})
}

func createProductDivs() string{
	content := "";
	products := dbConnect.GetProducts()

	for i := products.Front(); i != nil; i=i.Next() {
        product := i.Value.(dbConnect.Product)

        content +="<div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-2\"><div class=\"thumbnail\"><img src=\"" + product.ImageUrl + "\"><div class=\"caption\"><h3>" + product.Name + "</h3><p>Description</p><p><button href=\"#\" class=\"btn btn-defaurt\">See more</button><button href=\"#\" class=\"btn btn-defaurt\">Buy</button></p></div></div></div>"
    }

    return content;
}

func createCategoryMenu() string{
	menu := "";
	categories := dbConnect.GetCategories()

	k := 1
	for i := categories.Front(); i != nil; i=i.Next() {
        category := i.Value.(dbConnect.Category)

        menu +="<li class=\"menuList\" onmouseover=\"menuSubcatY('" + strconv.Itoa(k) + "')\" id=\"menuList\"><a href =\"#\" class=\"linkColor\">" + category.Name + "</a><ul class=\"menuSubcat secondColor\" id=\"menuSubcat" + strconv.Itoa(k) + "\">"

        subcats := dbConnect.GetSubcategoriesById(category.Id)
        for j := subcats.Front(); j != nil; j=j.Next() {
        	subcat := j.Value.(dbConnect.Category)

        	menu += "<li><a href =\"#\" class=\"linkColor\">" + subcat.Name + "</a></li>"
		}

		menu += "</ul></li>"
		k++
    }

    return menu;
}

func main() {
	http.Handle("/img/", http.StripPrefix("/img/", http.FileServer(http.Dir("./img/"))))
	http.Handle("/style/", http.StripPrefix("/style/", http.FileServer(http.Dir("./style/"))))
	http.Handle("/js/", http.StripPrefix("/js/", http.FileServer(http.Dir("./js/"))))
	http.HandleFunc("/", index)

	http.ListenAndServe(":8080", nil)
}