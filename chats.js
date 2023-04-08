
var db = openDatabase("DataMessages", "2.0", "Mybase", 4048);
db.transaction(function (criar) {
    criar.executeSql("CREATE TABLE messages (id PRIMARY KEY, nome TEXT, dataCriacao NUMBER, conteudo TEXT)");
})
function sendMessages() {
    var sms = document.querySelector("input#message").value
    db.transaction(function (addMessage) {
        addMessage.executeSql("INSERT INTO messages (conteudo) values (?)", [sms]);
    })
    showMessages()
}
const showMessages = () => {
    var InSms = document.querySelector('div.chat-content')
    db.transaction(function (mostrar) {
        mostrar.executeSql("SELECT * FROM messages", [], function (mostrar, res) {
            var rows = res.rows;
            var tr = ''
            for (var i = 0; i < rows.length; i++) {
                if(new Number(rows[i].rowid) % 2 > 1) {
                    tr += '<span class="friend first">';
                    tr += '<span>' + rows[i].conteudo + '</span>'
                    tr += '</span>'
                } else {
                    tr += '<span class="you last">';
                    tr += '<span>' + rows[i].conteudo + '</span>'
                    tr += '</span>'
                }
            };
            InSms.innerHTML = tr
        });
    }, null);
};
window.addEventListener('load', showMessages)