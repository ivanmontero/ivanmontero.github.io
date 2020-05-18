---
id: 1
title: "Neural Networks"
subtitle: "Learning from example"
date: "2019.12.08"
tags: "tag1, tag2"
---

_**Content forthcoming**_

```python
import torch
import torch.nn as nn
import torch.nn.functional as F

device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
```