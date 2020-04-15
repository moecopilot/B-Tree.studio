---
sidebar: false
vssue: false
readingTime: false
---

# 网站功能测试

## Three.js

config 写在模型路径`/assets/model/`下的`*.yml`文件中：

```yaml
file: RapberryPiZero.glb
type: glTF
position:
  x: 0
  y: 0
  z: 0
autoRotateSpeed: -2
```

prop.|default
-----|-----
file|"RapberryPiZero.glb"
type|"glTF"
position|{ x: 0, y: 0, z: 0 }
autoRotateSpeed|-2

组件`Three`:

``` html
<Three conf="RapberryPiZero.yml"/>
```

<Three conf="RapberryPiZero.yml"/>