#version 120 // glsl version 1.2 for OpenGL 2.1
uniform vec2 windowSize; 
uniform vec2 cursorPos;
uniform int timeDiff;

void main(void) {
    // Fragment shader should output into gl_FragColor an RGBA:
    vec2 uv = gl_FragCoord.xy / windowSize;
    vec2 correctCursor = vec2(cursorPos.x, windowSize.y - cursorPos.y);
    gl_FragColor = vec4((1 + cos(uv.x + timeDiff)) * 0.5, uv.y, 0, 1);
    if (distance(gl_FragCoord.xy, correctCursor) < 10) {
        gl_FragColor = vec4(1, 1, 1, 1);
    }
}
