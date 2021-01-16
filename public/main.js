let n = 1

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '3.html')
    request.onload = () => {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {}
    request.send()
}


getCSS.onclick = () => {
    const request = new XMLHttpRequest()

    request.open('GET', '/style.css')

    request.onload = () => {
        console.log('request.response')
        console.log(request.response)
            // 创建一个style标签
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
    }

    request.onerror = () => {
        console.log('失败了')
    }
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()

    request.open('GET', '/2.js')

    request.onreadystatechange = () => {
        console.log(request.readyState)
        if (request.readyState === 4) {
            // 下载完成 但不知道成功还是失败
            if (request.status >= 200 && request.status <= 300) { //用状态码来判断f
                const script = document.createElement('script')
                script.innerHTML = request.response
                document.body.appendChild(script)
            } else {
                alert('加载失败')
            }

        }

    }


    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest
    request.open('get', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            // console.log('chenggong')
            console.log(request.response)
            console.log(request.responseXML)
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    };
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', "/5.json")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response)
            const object = JSON.parse(request.response)
            myname.textContent = object.name
            console.log(object)
        }
    }
    request.send()
}

getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', `/page${n+1}.json`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            array.forEach(element => {
                const li = document.createElement('li')
                li.textContent = element.id
                xxx.appendChild(li)
            });
            n += 1
        }

    }
    request.send()
}