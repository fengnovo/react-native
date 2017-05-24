# AwesomeProject
AwesomeProject是用react-native-cli生成一个helloworld项目结构  
##说明  
项目入口：ios默认是index.ios.js,android默认是index.android.js  
修改默认入口，比如要将默认的入口index.ios改为src目录下的index.js入口  
找到ios->AwesomeProject->AppDelegate.m  
将 jsBundleURLForBundleRoot:@"index.ios" 改为 jsBundleURLForBundleRoot:@"src/index.ios"  
moduleName:@"AwesomeProject"是入口文件加载的模块  
