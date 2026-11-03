#version 120 // glsl version 1.2 for OpenGL 2.1
uniform vec2 windowSize; 

void main(void) {
    // Fragment shader should output into gl_FragColor an RGBA:
    vec2 uv = gl_FragCoord.xy / windowSize;
    gl_FragColor = vec4(uv, 0, 1);
}
