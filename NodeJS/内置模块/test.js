const {method ,url,headers}=request
//method:请求方法
//url:请求地址
//headers:请求头

//设置状态码
Response.statusCode=200
//设置响应头
Response.setHeader('Content-Type','text/plain')
//发送响应数据
Response.end('这是服务器的响应数据')