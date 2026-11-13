// ============================================================
// Secret — sends the "attack succeeded" signal to the defenders.
// Requires the webconnect UMD script (loaded in secret.html first).
// ============================================================
var appName = 'OH2027'
channelName = 'OH2027PVP'
connectPassword = 'WhyD1diS@yy3s2r+c'
const options = {appName,channelName,connectPassword}
const connection = webconnect(options)
connection.onConnect(async(attribute)=>{
    console.log(attribute)
    connection.Send('atk',attribute)
    connection.onReceive((data,attribute)=> {flag = data
        console.log(data)
    })
    if(flag = 'hit'){
        connection.Disconnect()
    }
})
