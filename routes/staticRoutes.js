const websiteAssetPath = './templates/assets/'

module.exports = [
    {
     path: "/res/{path*}",
     method: "GET",
     handler: {
         directory: {
             path: "./templates/res",
             listing: true,
             index: false
         }
     }}
]
