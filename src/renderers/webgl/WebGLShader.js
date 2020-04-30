/**
 * @author mrdoob / http://mrdoob.com/
 */


/**
<<<<<<< HEAD
属性：
 gl--webgl上下文对象
 type--gl.VERTEX_SHADER 或 gl.FRAGMENT_SHADER
 string--shader代码字符串
返回：
 返回一个webgl着色器对象
=======
屬性：
 gl--webgl上下文對象
 type--gl.VERTEX_SHADER 或 gl.FRAGMENT_SHADER
 string--shader代碼字符串
返回：
 返回一個webgl著色器對象
>>>>>>> 0795d0aba4145bfbc19263b51d3e4e5ff4e15161
*/
function WebGLShader( gl, type, string ) {

	var shader = gl.createShader( type );

	gl.shaderSource( shader, string );
	gl.compileShader( shader );

	return shader;

}

export { WebGLShader };
