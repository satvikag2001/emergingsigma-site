# Image credits

All photographs below are from [Unsplash](https://unsplash.com) and are used under the
[Unsplash License](https://unsplash.com/license), which permits free commercial use
without attribution. Credit is recorded here as good practice.

They were originally hotlinked from `images.unsplash.com`; they are now downloaded and
served from this repository so the site has no third-party image dependency.

| File | Unsplash photo ID | Used by |
|---|---|---|
| `hero-home.jpg` | `photo-1576091160550-2173dba999ef` | `.hero-bg` — home page hero |
| `hero-equipment.jpg` | `photo-1581092160562-40aa08e78837` | `.eq-hero-bg` — equipment qualification |
| `hero-regulatory.jpg` | `photo-1589829545856-d10d557cf95f` | `.reg-hero-bg` — regulatory affairs |
| `hero-qms.jpg` | `photo-1454165804606-c3d57bc86b40` | `.qms-hero-bg`, `.pm-hero-bg` |
| `hero-training.jpg` | `photo-1524178232363-1fb2b075b655` | `.tr-hero-bg` — training |
| `hero-digitalization.jpg` | `photo-1551288049-bebda4e38f71` | `.dg-hero-bg` — digitalization |
| `hero-supplier.jpg` | `photo-1553413077-190dd305871c` | `.sq-hero-bg`, `.wh-hero-bg` |
| `impact.jpg` | `photo-1504328345606-18bbc8c9d7d1` | `.impact-bg` |
| `equipment-split.jpg` | `photo-1567789884554-0b844b597180` | `.img-split-photo` in `equipment-qualification.html` |
| `hero-product-quality.jpg` | — | `.pq-hero-bg` — **stand-in, see below** |

## hero-product-quality.jpg needs replacing

The original photo for this hero (`photo-1581093458791-9f3c3900df4b`) has been removed
from Unsplash and now returns **404**, so this hero had no background image at all.

It is currently a copy of `equipment-split.jpg` as a stand-in. To replace it, drop a new
image at `assets/img/hero-product-quality.jpg` — no CSS change is needed.

Suggested specs: landscape, ~1800×1200, JPEG, quality 80. The hero sits under a dark teal
gradient that is ~98% opaque on the left and fades out to the right, so only the right
third of the image is really visible. Choose something whose subject sits right of centre.
