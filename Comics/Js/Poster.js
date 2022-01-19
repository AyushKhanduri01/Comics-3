AFRAME.registerComponent('poster', {
    init: function(){
        this.posterContainer = this.el
        this.createPosters();
    },

    createPosters: function(){
        const thumbNailsRef = [
            {
                id:"batman",
                title:"Batman",
                url:"./images/comics/batman/batman.jpg"
            },
            {
                id:"horror",
                title:"Horror",
                url:"./images/comics/horror/horror.jpg"
            },
            {
                id:"superman",
                title:"Superman",
                url:"./images/comics/superman/superman.jpg"
            },
            {
                id:"thor",
                title:"Thor",
                url:"./images/comics/thor/thor.jpg"
            },
        ]

        let previousXPosition = -60;

        for (var item of thumbNailsRef){
            const posX = previousXPosition + 25;
            const posY = 10;
            const posZ = -40;

            const position = {x:posX, y:posY, z:posZ};
            previousXPosition = posX

            //Border Element
            const BorderEl = this.createBorder(position, item.id)

            //Thumbnail Element
            const thumbnail = this.createThumbnail(item)
            BorderEl.appendChild(thumbnail)

            //Title Text Element
            const TitleEl = this.createTitleEl(position, item)
            BorderEl.appendChild(TitleEl)

            this.posterContainer.appendChild(BorderEl)

        }
    },
    createBorder: function(position, id){
        const entityEl = document.createElement("a-entity")

        entityEl.setAttribute("id", id)
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("geometry", {
            primitive: "ring",
            radiusInner: 9,
            radiusOuter: 10,
        })
        entityEl.setAttribute("position", position)
        entityEl.setAttribute("material", {
            color: "#0077CC",
            opacity: 1,
        })

        entityEl.setAttribute("cursor-listener", {});

        return entityEl
    },
    createThumbnail: function(item){
        const entityEl = document.createElement("a-entity");

        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("geometry", {
            primitive: "circle",
            radius:9
        })
        entityEl.setAttribute("material", {
            src: item.url
        })
        
        return entityEl
    },
    
    // createThumbnail: function(item){
    //     const entityEl = document.createElement("a-entity")
    //     entityEl.setAttribute("visible", true)
    //     entityEl.setAttribute("geometry", {
    //       primitive: "circle",
    //       radius: 9
    //     })
    //     entityEl.setAttribute("material", {
    //       src: item.url
    //     })
    //     return entityEl
    // },
    createTitleEl: function(position, item){
        const entityEl = document.createElement("a-entity");

        entityEl.setAttribute("text", {
            value: item.title,
            font: "exo2bold",
            align: "center",
            width: 60,
            color: "#e65100"
        })

        const elPosition = position;
        elPosition.y =-20;

        entityEl.setAttribute("position", elPosition);
        entityEl.setAttribute("visible", true);

        entityEl.setAttribute("scale", {x:2, y:2, z:2})
        
        return entityEl
    }
})