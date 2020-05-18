---
id: 4
title: "Attention: All The Explanation You Need"
subtitle: "How modern transformers work"
date: "2019.12.08"
tags: "tag1, tag2"
---

_**Content forthcoming**_

```python
import torch
import torch.nn as nn
import torch.nn.functional as F
import transformers

device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
```