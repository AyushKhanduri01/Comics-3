AFRAME.registerComponent("info-banner", {
    schema:{
        itemId: {default: "", type: "string" },
    },
    update: function(){
        this.createBanner();
    },
    createBanner: function(){
        postersInfo = {
            "batman": {
              banner_url: "./images/comics/batman/batmanBanner.jpg",
              title: "Batman",
              description: "Batman, in most of his incarnations, is a dark and brooding hero with a personal vendetta against crime and injustice. Psychologically traumatized by the death of his parents, Batman has sworn to rid Gotham from the criminal elements that took his parents away from him.",
            },
            "horror": {
              banner_url: "./images/comics/horror/horrorBanner.jpg",
              title: "Horror",
              description: "Horror definition, an overwhelming and painful feeling caused by something frightfully shocking, terrifying, or revolting; a shuddering fear: to shrink back from a mutilated corpse in horror.",
            },
            "superman": {
              banner_url: "./images/comics/superman/supermanBanner.jpg",
              title: "Superman",
              description: "Superman is an ongoing American comic book series featuring the DC Comics superhero Superman as its main protagonist. Superman began as one of several anthology features in the National Periodical Publications comic book Action Comics in June 1938. The strip proved so popular that National launched Superman into his own self-titled comic book, the first for any superhero, premiering with the cover date Summer 1939.",
            },
            "thor": {
              banner_url: "./images/comics/thor/thorBanner.jpg",
              title: "Thor",
              description: "Upon being welcomed back to Asgard as a hero, Thor was forced to return to Earth in order to retrieve Loki after he had survived a fall through a black hole and had begun his attempt at world domination, having taken possession of the Tesseract.",
            },
        }

        const { itemId } = this.data;

        const fadeBackgroundEl = document.querySelector("#fadeBackground");
    
        const entityEl = document.createElement("a-entity");   
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("id", `${itemId}-banner`);
    
        entityEl.setAttribute("geometry", {
          primitive: "plane",
          width: 0.9,
          height: 1,
        });
    
        entityEl.setAttribute("material", { color: "#000" });
        entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });
    
        const item = postersInfo[itemId];
    
        const imageEl = this.createImageEl(item);
        const titleEl = this.createTitleEl(item);
        const descriptionEl = this.createDescriptionEl(item);
    
        entityEl.appendChild(imageEl);
        entityEl.appendChild(titleEl);
        entityEl.appendChild(descriptionEl);
    
        fadeBackgroundEl.appendChild(entityEl);
    },
    createImageEl: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
          primitive: "plane",
          width: 0.85,
          height: 0.4,
        });
        entityEl.setAttribute("material", { src: item.banner_url });
        entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
        return entityEl;
    },
    createTitleEl: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("text", {
          shader: "msdf",
          anchor: "left",
          font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
          width: 1.2,
          height: 2,
          color: "#fff",
          value: `${item.title}`,
        });
        entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
        return entityEl;
    },
    createDescriptionEl: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("text", {
          shader: "msdf",
          anchor: "left",
          font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
          width: 0.75,
          height: 2,
          color: "#fff",
          wrapCount: "40",
          value: item.description,
        });
        entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
        return entityEl;
    },
})