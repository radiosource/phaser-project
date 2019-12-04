import Abstract from '../Abstract'

class Scene extends Abstract {

  constructor() {
    super();
    this.on('111',function(){
     console.log("Huy=======")
    })
  }

  init() {

  }

  preload() {
  }

  create() {

  }

  update() {
  }
}

module.exports = Scene;