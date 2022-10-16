console.log('Hello World!');
fetch('https://api.publicapis.org/entries')
    .then((response) => response.json())
    .then((json) => {
        let a = json.entries
        console.log(a)
        let data = "";
        a.map((values) => {
            data += `<tr>
                          <td></td>
                          <td>${values.API}</td>
                          <td>${values.Category}</td>
                          <td>${values.Description}</td>
                          <td><a href="${values.Link}" style="text-decoration: none" target="_blank">${values.Link}</a></td>
                          <td>${values.HTTPS}</td>
                        </tr>
                    `
        })
        console.log(data);
        document.getElementById("data_show").innerHTML = data;
    }).catch((err) => document.write("can't fetch data"))
