//OLD fashion
/*function reverse(str){
  if(str.length === 0) return "";
  return str.slice(str.length-1)+reverse(str.slice(0,str.length-1))
}*/

//NEW fashion
function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1))+str[0];
}
reverse('awe'); // 'emosewa'
//reverse('rithmschool') // 'loohcsmhtir'

    