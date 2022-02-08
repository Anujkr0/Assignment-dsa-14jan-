var uniqueOccurrences = function (arr) {



  if (!arr || !arr.length)
      return false

  const map = {}



  for (let i = 0; i < arr.length; i++)
  
  {
      map[arr[i]] = map[arr[i]] ? map[arr[i]] + 1 : 1
  }

  const set = {}

  for (const key in map)
   {
      if (set[map[key]])
          return false
      else
          set[map[key]] = 1
  }

  return true
}