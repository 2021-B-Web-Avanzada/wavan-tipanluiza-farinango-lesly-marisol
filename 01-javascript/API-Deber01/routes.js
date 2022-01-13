const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM genero', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        //console.log(req.body)
        
        conn.query('INSERT INTO genero set ?',[req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('new musical genre added!')
        })
    })
})

routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        //console.log(req.body)
        
        conn.query('DELETE FROM genero WHERE idgenero = ?',[req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('musical genre deleted!')
        })
    })
})

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        //console.log(req.body)
        
        conn.query('UPDATE genero set ? WHERE idgenero = ?',[req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('musical genre updated!')
        })
    })
})




// ----------------------  ARTISTA   -------------------------------
routes.get('/mostrarArtistas', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM artista', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/addArtist', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        //console.log(req.body)
        
        conn.query('INSERT INTO artista set ?',[req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('new artist added!')
        })
    })
})

routes.delete('/delete/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        //console.log(req.body)
        
        conn.query('DELETE FROM artista WHERE idartista = ?',[req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('artist deleted!')
        })
    })
})

routes.put('/update/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        //console.log(req.body)
        
        conn.query('UPDATE artista set ? WHERE idartista = ?',[req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('artist updated!')
        })
    })
})






module.exports = routes