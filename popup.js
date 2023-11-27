const datas = [
  {
    url: "https://bio.naturalia.fr/products/search?q=",
    shop: "naturalia"
  },
  {
    url: "https://www.greenweez.com/recherche/",
    shop: "greenweez"
  },
  {
    url: "https://lafourche.fr/search?query=",
    shop: "lafourche"
  },
  {
    url: "https://drive.biocoop-rouen.fr/recherche?orderby=position&controller=search&orderway=desc&search_query=",
    shop: "biocoop-rouen"
  },
  {
    url: "https://www.carrefour.fr/s?q=",
    shop: "carrefour",
  },
  {
    url: "https://fd14-courses.leclercdrive.fr/magasin-016301-Clermont-Ferrand/recherche.aspx?TexteRecherche=",
    shop: "leclerc"
  },  
  {
    url: "https://www.nousantigaspi.com/catalogsearch/result/?q=",
    shop: "nousantigaspi"
  },  
  {
    url: "https://willyantigaspi.fr/search?q=",
    shop: "willyantigaspi"
  },  
  {
    url: "https://www.intermarche.com/recherche/",
    shop: "intermarche"
  },  
  {
    url: "https://www.monoprix.fr/courses/search/",
    shop: "monoprix"
  }
];

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const productName = document.getElementById("urlInput").value.toLowerCase();

  chrome.windows.create({ focused: true }, function(window) {
    datas.forEach(data => {
      const monoprixUrl = `${data.url}${productName}/${productName}`
      const tabUrl = data.shop === "monoprix" ? monoprixUrl : `${data.url}${productName}`;

      chrome.tabs.create({ url: tabUrl, windowId: window.id });
    });
  });

  document.getElementById("urlInput").value = "";
})
