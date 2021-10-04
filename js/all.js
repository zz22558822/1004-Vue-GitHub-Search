let app = new Vue({
    el:`.app`,
    data:{
      user:``,
      githubUrl:``,
      commits: null,
    },
    
    methods:{
  
      search:function(){
        // API位置 帶入到 githubUrl
        let githubUrl = `https://api.github.com/users/${this.user}/repos`;
        this.githubUrl = githubUrl;
  
        // AJAX
        this.fetchData();
        
        this.user=``;
      },
      fetchData: function () {
        let xhr = new XMLHttpRequest()
        let self = this
        xhr.open('GET', this.githubUrl)
        xhr.onload = function () {
          self.commits = JSON.parse(xhr.responseText)
        }
        xhr.send()
      },
  
    },
    computed:{
        
    },
});