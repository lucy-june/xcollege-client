var _user=null;

angular.module('app.controllers', [])

.controller('page2Ctrl', function($scope) {

})

.controller('page3Ctrl', function($scope, $state, $http) {
	$http({
           method : 'GET',
           url : 'http://localhost:5000/getQuestions'
    }).success(function(res){
           console.log(res);
           $scope.questions=res;

    }).error(function(error){
           console.log(error);
           $scope.questions=[];
           $ionicPopup.alert({ title: '获取信息失败', template: '系统错误，请重试'});
    });

    $scope.addQ=function(q){
    	console.log('add Question',q);

    	$http({
           method : 'GET',
           url : 'http://localhost:5000/addQuestion?'+Object.toparams({username : _user.username, question : q.question})
      	}).success(function(res){
           console.log(res);
            $scope.questions=res;
      	}).error(function(error){
           console.log(error);
           $ionicPopup.alert({ title: '问题提交失败', template: '系统错误，请重试'});
      	});
    }

    $scope.doRefresh=function(){
    	$http({
           method : 'GET',
           url : 'http://localhost:5000/getQuestions'
    	}).success(function(res){
           console.log(res);
           $scope.questions=res;
       	   $scope.$broadcast('scroll.refreshComplete');
    	}).error(function(error){
           console.log(error);
           $scope.questions=[];
           $ionicPopup.alert({ title: '获取信息失败', template: '系统错误，请重试'});
           $scope.$broadcast('scroll.refreshComplete');
    	});
    }
})

.controller('page4Ctrl', function($scope) {

})

.controller('page6Ctrl', function($scope, $state, $http, $ionicPopup) {

	$scope.signIn = function(user) {
    	console.log('Sign-In', user);

    	$http({
           method : 'GET',
           url : 'http://localhost:5000/login?'+Object.toparams({username : user.username, password : user.password})
      	}).success(function(res){
           console.log(res);
           if(res.status){
           		_user=user;
           		$state.go('tabsController.page3');
           		return;
           }
           else{
           		$ionicPopup.alert({ title: '登录失败', template: '请输入正确的用户名与密码'});
           		return;
           }

      	}).error(function(error){
           console.log(error);
           $ionicPopup.alert({ title: '登录失败', template: '系统错误，请重试'+JSON.stringify(error)});
      	});
  	};
})

.controller('page7Ctrl', function($scope, $state, $http, $ionicPopup) {
	$scope.regist = function(user) {
    	console.log('Regist', user);

    	if(!user.username || !user.password || !user.password2) {
    		$ionicPopup.alert({ title: '注册提示', template: '请补全注册信息'});
    		return;
    	}
    	if((user.password!=user.password2)){
    		$ionicPopup.alert({ title: '注册提示', template: '两次密码输入不一致'});
    		return;
    	}

    	$http({
           method : 'GET',
           url : 'http://localhost:5000/regist?'+Object.toparams({username : user.username, password : user.password})
      	}).success(function(res){
           console.log(res);
           if(res.status){
           		$state.go('page6');
           }
       	   else{
       	   		$ionicPopup.alert({ title: '注册失败', template: '系统错误，请重试'});
       	   }
      	}).error(function(error){
           console.log(error);
           $ionicPopup.alert({ title: '注册失败', template: '系统错误，请重试'});
      	});
  	};
})

.controller('page8Ctrl', function($scope, $stateParams, $state, $http) {

	$http({
           method : 'GET',
           url : 'http://localhost:5000/getQuestion?'+Object.toparams({id:$stateParams.id})
      	}).success(function(res){
            $scope.question=res;
      	}).error(function(error){
           console.log(error);
           $ionicPopup.alert({ title: '获取信息失败', template: '系统错误，请重试'});
      	});


    $scope.addA=function(q){
    	console.log('add Question',q);

    	$http({
           method : 'GET',
           url : 'http://localhost:5000/addAnswer?'+Object.toparams({id:$scope.question.id, username : _user.username, answer : q.answer})
      	}).success(function(res){
           console.log(res);
            $scope.question=res;
      	}).error(function(error){
           console.log(error);
           $ionicPopup.alert({ title: '答案提交失败', template: '系统错误，请重试'});
      	});
    }


    $scope.doRefresh=function(){
    	$http({
           method : 'GET',
           url : 'http://localhost:5000/getQuestion?'+Object.toparams({id:$stateParams.id})
      	}).success(function(res){
            $scope.question=res;
            $scope.$broadcast('scroll.refreshComplete');
      	}).error(function(error){
           console.log(error);
           $ionicPopup.alert({ title: '获取信息失败', template: '系统错误，请重试'});
           $scope.$broadcast('scroll.refreshComplete');
      	});
    }

})

.controller('page9Ctrl', function($scope,$ionicPopup) {
    $scope.report=function(r){
      console.log(r);
      if(!r.username || !r.reason){
        $ionicPopup.alert({ title: '提示信息', template: '请补全举报信息'});
      }
      $ionicPopup.alert({ title: '举报成功', template: '<p>举报对象：'+r.username+'</p>'+'<p>举报内容：'+r.reason+'</p>'});
    }
})

.controller('page10Ctrl', function($scope) {

})

.controller('page11Ctrl', function($scope,$state, $http) {
    $scope.user=_user;

    $http({
           method : 'GET',
           url : 'http://localhost:5000/getQuestions?username='+_user.username
    }).success(function(res){
           console.log(res);
           $scope.questions=res;
           $scope.have=res && res.length>0;

    }).error(function(error){
           console.log(error);
           $scope.questions=[];
           $scope.have=false;
           $ionicPopup.alert({ title: '获取信息失败', template: '系统错误，请重试'});
    });
})






Object.toparams = function ObjecttoParams(obj)
{
  var p = [];
  for (var key in obj)
  {
    p.push(key + '=' + encodeURIComponent(obj[key]));
  }
  return p.join('&');
};
