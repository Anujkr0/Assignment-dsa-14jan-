var JewelsInStones = function(J, S) 

{


    var count = 0;

    for (var i=0; i<J.length; i++)
    
    {
          for (var k=0; k<S.length; k++)
          
          {
              if (J[i].includes(S[k]))
              
              {
                  count++
              }
          }
      }
      return count;
  };
  
  console.log(JewelsInStones("aB","aBBcccc"))