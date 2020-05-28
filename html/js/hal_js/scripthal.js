var callbackSucess=function(data){
  console.log("donnee Api",data);
  console.log("nombre d'article:",data.response.numFound);
  /*let params = new URLSearchParams(document.location.search.substring(1));
  var type = params.get("docType_s");
  var annee = parseInt(params.get("annee")); /*
  console.log(type);
  console.log(annee)
  //console.log("nombre d'article:",data.response.numFound);
/*if (type && annee) {
      urlHal = "https://api.archives-ouvertes.fr/search/DAVID/?q=*&fq=producedDateY_i:" + annee + "&fq=docType_s:" + type + "&fl=title_s,docid,uri_s,docType_s,authFullName_s,country_s,producedDateY_i&rows=1000&indent=true";            
}
else if (type && !annee) {
      urlHal = "https://api.archives-ouvertes.fr/search/DAVID/?q=*&fq=docType_s:" + type + "&fl=title_s,docid,uri_s,docType_s,authFullName_s,country_s,producedDateY_i&rows=1000&indent=true";              
}
else if (!type && annee) {
      urlHal = "https://api.archives-ouvertes.fr/search/DAVID/?q=*&fq=producedDateY_i:" + annee + "&fl=title_s,docid,uri_s,docType_s,authFullName_s,country_s,producedDateY_i&rows=1000&indent=true";            
}else
        urlHal = "https://api.archives-ouvertes.fr/search/DAVID/?q=*&fl=title_s,docid,uri_s,docType_s,authFullName_s,country_s,producedDateY_i&rows=1000&indent=true";            
*/
//console.log(urlHal);
 // alert("labels:"+data);
  //var element = document.getElementById(zone_affiche); 
  //element.innerHTML="labels:"+
clearInner(document.getElementById("zone_affiche"));
clearInner(document.getElementById("nb_art"));
  var nb_art='';
  nb_art+="Nombre de publication: "+data.response.numFound+"";
  var ref = '';
  $.each(data.response.docs, function(key, value){
    ref += '<tr>';
	  ref += '<td>'+value.docid+'</td>';
    ref += '<td>'+value.title_s+'</td>';
	  ref += '<td>'+value.authFullName_s+'</td>';
	  ref += '<td> <a href='+value.uri_s+'>'+value.uri_s+'</a></td>';
	  ref += '<td>'+value.producedDateY_i+'</td>';
	  ref += '<td>'+value.docType_s+'</td>'
	  ref += '<td>'+value.country_s+'</td>';	
    
    ref += '</tr>';
  });
   //$(#tab).load(#tab);
  $('#nb_art').append(nb_art);
  $('#zone_affiche').append(ref);
  $('#entete').text('resultat de la requete');
}

function buttonClikGET(annee,opt){
  //var url="http://api.archives-ouvertes.fr/search/?q=test&wt=json"
  //var url = "https://api.archives-ouvertes.fr/search/DAVID"
  
  let params = new URLSearchParams(document.location.search.substring(1));
  var type = params.get("docType_s");
  var annee = parseInt(params.get("annee")); 
  var errors = params.get("errors");
  console.log(errors);
  
if(opt===1)
{

 //var url = "https://api.archives-ouvertes.fr/search/DAVID/?q=*&fq=producedDateY_i:" + annee + "&rows=1000&indent=true&facet=true&facet.field=docType_s";
 var url = "https://api.archives-ouvertes.fr/search/DAVID/?q=*:*&wt=json&fl=title_s,producedDateD_i,producedDateM_i,docType_s,producedDateY_i,docid,uri_s,country_s,authFullName_s&fq=producedDateY_i:" + annee + "&rows=1000&indent=true&facet=true&facet.field=docType_s";
}
else if(opt===0)
{
	var url = "https://api.archives-ouvertes.fr/search/DAVID/?q=*:*&wt=json&fl=title_s,docid,uri_s,docType_s,authFullName_s,country_s,producedDateY_i&fq=docType_s:" + annee + "&rows=1000&indent=true&facet=true&facet.field=docType_s";
	
}
else if(opt===2)
{
   if(annee==="fr")
   {
   	   var url = "https://api.archives-ouvertes.fr/search/DAVID/?q=*:*&wt=json&fl=title_s,docid,uri_s,docType_s,authFullName_s,country_s,producedDateY_i&fq=country_s:" + annee + "&rows=1000&indent=true&facet=true&facet.field=docType_s";
   }
   else
   {
   	  var url = "https://api.archives-ouvertes.fr/search/DAVID/?q=*:*&wt=json&fl=title_s,docid,uri_s,docType_s,authFullName_s,country_s,producedDateY_i&fq=!country_s:fr &rows=1000&indent=true&facet=true&facet.field=docType_s";
   }
}
else if(opt===3)
{
	var url = "https://api.archives-ouvertes.fr/search/DAVID/?q=*:*&wt=json&fl=title_s,docid,uri_s,docType_s,authFullName_s,country_s,producedDateY_i&rows=1000&indent=true&facet=true&facet.field=docType_s";
}
else
{
	if (type && annee) {
      url = "https://api.archives-ouvertes.fr/search/DAVID/?q=*&fq=producedDateY_i:" + annee + "&fq=docType_s:" + type + "&fl=title_s,docid,uri_s,docType_s,authFullName_s,country_s,producedDateY_i&rows=1000&indent=true";            
                    }
    else if (errors) {
      url = getErrors();              
      }
    else if (type && !annee) {
      url = "https://api.archives-ouvertes.fr/search/DAVID/?q=*&fq=producedDateY_i:[2015%20TO%20*]&fq=docType_s:" + type + "&fl=title_s,docid,uri_s,docType_s,authFullName_s,country_s,producedDateY_i&rows=1000&indent=true";              
      }
    else if (!type && annee) {
      url = "https://api.archives-ouvertes.fr/search/DAVID/?q=*&fq=producedDateY_i:" + annee + "&fl=title_s,docid,uri_s,docType_s,authFullName_s,country_s,producedDateY_i&rows=1000&indent=true";            
      }else
        url = "https://api.archives-ouvertes.fr/search/DAVID/?q=*&fl=title_s,docid,uri_s,docType_s,authFullName_s,country_s,producedDateY_i&rows=1000&indent=true";            
	//var url = "https://api.archives-ouvertes.fr/search/DAVID/?q=*:*&wt=json&fl=title_s,docid,uri_s,docType_s,authFullName_s,country_s,producedDateY_i&fq=docType_s:" + type + "&fq=producedDateY_i:" + annee + "&rows=1000&indent=true&facet=true&facet.field=docType_s";
    //var url="https://api.archives-ouvertes.fr/search/DAVID/?q=*&fq=producedDateY_i:" + annee + "&fq=docType_s:" + type + "&fl=title_s,docid,uri_s,docType_s,authFullName_s,country_s,producedDateY_i&rows=1000&indent=true"
 }	
//location.reload(false); //permet de raffraichir la page
  var donnee=$.get(url,callbackSucess).done(function(){

  })
  .fail(function(){
    alert("error");
    })
    .always(function(){

    });
}

function getErrors(){
    DavidNames = [
    "Luc%20Bouganim",
    "Mokrane%20Bouzeghoub",
    "Pierre%20Couchenay",
    "Béatrice%20Finance",
    "Jean-Michel%20Fourneau",
    "Danièle%20Gardy",
    "Zoubida%20Kedad",    
    "Leïla%20Kloul",  
    "Stéphane%20Lopes",   
    "Yann%20Loyer",   
    "Dana%20Marinca", 
    "Laurent%20Marsan",   
    "Thierry%20Mautor",   
    "Nicoleta%20Preda",   
    "Philippe%20Pucheral",    
    "Franck%20Quessette",
    "Popa%20Iulian%20Sandou",
    "Guillaume%20Scerri", 
    "Yann%20Strozecki",   
    "Yehia%20Taher",  
    "Sandrine%20Vial",    
    "Laurent%20Yeh",
    "Karine%20Zeitouni"]
    //Defining a url for finding publications with author in DavidNames
    var url_david_auth = "https://api.archives-ouvertes.fr/search/?q=-DAVID(" + "\"" + DavidNames[0] +"\"";
            for (var i = 1; i < DavidNames.length; i++) {
                url_david_auth += " OR " + "\"" + DavidNames[i] +"\"";
            }
            url_david_auth += ")&fl=title_s,docid,uri_s,docType_s,authFullName_s,country_s,producedDateY_i&rows=1000&indent=true&facet=true&facet.field=docType_s";
    console.log(url_david_auth);
    return url_david_auth;
}


function clearInner(node) {
    while (node.hasChildNodes()) {
        clear(node.firstChild);
    }
}

function clear(node) {
    while (node.hasChildNodes()) {
        clear(node.firstChild);
    }
    node.parentNode.removeChild(node);
}

