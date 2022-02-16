import {AccessControl} from 'accesscontrol'; 

const ac = new AccessControl(); 



// ~~** User Permissions **~~ // 

ac.grant('glaucon') 
.readOwn('post')
.readOwn('topic')
.readOwn('comment')
.deleteOwn('post')
.deleteOwn('comment')
.createOwn('post')
.createOwn('comment')
.createOwn('topic')
.createOwn('profile') 
.updateOwn('profile')
.updateOwn('comment')
.updateOwn('post')  


// ~~** Philo Permissions **~~ // 

.grant('aristotle')
.readOwn('post')
.readOwn('topic')
.readOwn('comment')
.readyAny('post')
.readAny('topic')
.readAny('comment')
.deleteOwn('post')
.deleteOwn('comment')
.deleteOwn('profile')
.createOwn('post')
.createOwn('comment')
.createOwn('topic')
.createOwn('profile') 
.updateOwn('profile')
.updateOwn('comment')
.updateOwn('post')  

//  ~~** Admin Permissions **~~ // 


.grant('socrates')
.readOwn('post')
.readOwn('topic')
.readOwn('comment')
.readyAny('post')
.readAny('topic')
.readAny('comment')
.deleteOwn('post')
.deleteOwn('comment')
.deleteOwn('profile')
.deleteAny('post')
.deleteAny('comment')
.deleteAny('topic')
.createOwn('post')
.createOwn('comment')
.createOwn('topic')
.createOwn('profile') 
.updateOwn('profile')
.updateOwn('comment')
.updateOwn('post') 
.updateAny('post') 


