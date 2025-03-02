// async await --------------------------------------------------------------------------------
// [Chú ý]: async phải cần có block lệnh thì suy ra nó bắt buộc phải nằm trong 1 function
//Có sử dụng then catch
async function call_planet() {
    const json = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    const data = json.json().then(); //Chuyển về kiểu json từ HTML
    data
    .then((planets => {
        //Load danh sách lên màn hình
        const html = planets.map((planet) => `<h6>${planet.name}</h6>`);
        document.write(html.join(''));
    }
    )).catch((error) => document.write(error));

}

// call_planet();

//------------------------------------------------------------------------
async function call_palent2() {
    try {
        const response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
        const planets = await response.json();
        const results = [];
        planets.forEach((planet) =>{
            results.unshift(`   <h6>${planet.name}</h6> `);
        });
        document.wrinte(results.join(' '));
    } catch (error) {
        console.log(error);
        
    }
    
}

call_palent2();