describe('express form testing', ()=>{
    const axios = require('axios');
    const readline = require('readline');
    const fixture = require('./fixture')
    let server

    beforeEach(()=>{
        server = require('../../src/index')
    });

    afterEach(()=>{
        server.close()
    })

    it('should return an html form', async (done)=>{
        try {
            const html = await axios.get("http://127.0.0.1:9005/")
            expect(html.data).toEqual(fixture)
        } catch (err) {
            console.log(err)
        }
        done()
    })
})
