/**
 * @author mrdoob / http://mrdoob.com/
 */


/**
屬性：
 gl--webgl上下文對象
 type--gl.VERTEX_SHADER 或 gl.FRAGMENT_SHADER
 string--shader代碼字符串
返回：
 返回一個webgl著色器對象
*/
function WebGLShader( gl, type, string ) {

	var shader = gl.createShader( type );

	gl.shaderSource( shader, string );
	gl.compileShader( shader );

	return shader;

}

export { WebGLShader };
