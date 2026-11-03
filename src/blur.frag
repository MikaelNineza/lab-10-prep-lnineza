#version 120 // glsl version 1.2 for OpenGL 2.1
uniform sampler2D texture;
uniform vec2 textureSize;

void main() {
    // Fragment shader should output into gl_FragColor an RGBA:
    vec2 pixelSize = vec2(1.0, 1.0) / textureSize;
    vec4 sum = vec4(0, 0, 0, 0);

    for (int x = -2; x < 3; x++) {
        for (int y = -2; y < 3; y++) {
            vec2 offset = vec2(x, y) * pixelSize;
            sum += texture2D(texture, gl_TexCoord[0].xy + offset);
        }
    }
    gl_FragColor = sum / 25.0;
}
