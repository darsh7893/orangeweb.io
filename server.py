import http.server
import socketserver

PORT = 8000

# Set MIME type mappings
handler = http.server.SimpleHTTPRequestHandler
handler.extensions_map['.js'] = 'application/javascript'
handler.extensions_map['.css'] = 'text/css'
handler.extensions_map['.html'] = 'text/html'
handler.extensions_map['.png'] = 'image/png'
handler.extensions_map['.wav'] = 'audio/wav'

# Allow immediate reuse of the port
socketserver.TCPServer.allow_reuse_address = True

with socketserver.TCPServer(("", PORT), handler) as httpd:
    print(f"Server started on port {PORT}")
    httpd.serve_forever()
