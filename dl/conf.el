(setq org-publish-project-alist
      '(("blog"
         :components ("artigos", "rss"))
        ("artigos"
         :base-directory "~/org/blog/"
         :html-extension "html"
         :base-extension "org"
         :publishing-directory "~/public_html/"
         :publishing-function org-html-publish-to-html
         :html-preamble nil
         :html-postamble nil)
        ("rss"
         :base-directory "~/org/blog/"
         :base-extension "org"
         :publishing-directory "~/public_html/"
         :publishing-function org-rss-publish-to-rss
         :html-link-home "http://mydomain.org/"
         :html-link-use-abs-url t)))
