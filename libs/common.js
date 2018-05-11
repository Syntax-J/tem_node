const crypto=require('crypto');
module.exports={
	MD5_SUFFIX:'%$3ff^%$#vfgerttjutrj*^%&%#@$^&%UThjtrrthryRTTYTRRT%$^465',
	md5:function (str) {
		var obj=crypto.createHash('md5');
		obj.update(str);
		return obj.digest('hex');
	}
}