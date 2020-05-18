---
id: 0
title: "PyTorch Basics"
subtitle: "Never again compute a gradient by hand"
date: "2019.12.08"
tags: "tag1, tag2"
---

_**Content forthcoming**_

```python
import torch

device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
```