/**
 * @author mrdoob / http://mrdoob.com/
 */


/**
属性：
 gl--webgl上下文对象
 type--gl.VERTEX_SHADER 或 gl.FRAGMENT_SHADER
 string--shader代码字符串
返回：
 返回一个webgl着色器对象
*/
function WebGLShader( gl, type, string ) {

	var shader = gl.createShader( type );

	gl.shaderSource( shader, string );
	gl.compileShader( shader );

	return shader;

}

export { WebGLShader };
