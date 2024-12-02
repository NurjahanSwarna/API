let newApi = document.getElementById('first');
document.getElementById('main')

fetch('https://dummyjson.com/products')
.then((res)=>res.json())
.then((data)=>{
    data.products.map((swarna)=>{
        newApi.innerHTML +=`
        <div class="semi">
            <img src ='${swarna.thumbnail}'/>
            <h3>${swarna.title}</h3>
            <p>${swarna.description}</p>
            <div class="ppp">
                <h4>$${swarna.price}<h6>5% off</h6> </h4>
            </div>
            <button><a>Order now</a></button>
        </div>
        `
    })
})
