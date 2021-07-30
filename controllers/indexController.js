const {videos} = require('../data/videos_db')
const {contactos} = require('../data/contactos_db')

module.exports = {
    index : (req,res) => res.render('index', {
        title : "Emilia Cole"
    }),
    music : (req,res) => {
        return res.render('music',{
            videos,
        })
    },
    about : (req,res) => {
        return res.render('about')
    },
    contact : (req,res) => {
        return res.render('contact',{
            contactos
        })
    },
}