describe('express form testing', ()=>{
    const axios = require('axios');
    let server

    const {addNewVisitor} = require('../src/app')
    const visitor = {
          name: 'Nhlakanipho',
          age: 20,
          date: new Date('01/08/2000'),
          time: '08:00:00',
          assistant: 'Nothile',
          comments: 'The best'
    }

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
