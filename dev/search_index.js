var documenterSearchIndex = {"docs":
[{"location":"supported-codes/#Supported-Codes","page":"Supported Codes","title":"Supported Codes","text":"","category":"section"},{"location":"supported-codes/","page":"Supported Codes","title":"Supported Codes","text":"using ANSIColoredPrinters","category":"page"},{"location":"supported-codes/#Bold-and-Faint","page":"Supported Codes","title":"Bold and Faint","text":"","category":"section"},{"location":"supported-codes/","page":"Supported Codes","title":"Supported Codes","text":"buf = IOBuffer()\nprint(buf, \"\\e[0m\", \"Normal \")\nprint(buf, \"\\e[1m\", \"Bold \")\nprint(buf, \"\\e[2m\", \"Faint \") # this unsets the \"bold\"\nprint(buf, \"\\e[0m\", \"Normal \")\nHTMLPrinter(buf, root_class=\"documenter-example-output\")","category":"page"},{"location":"supported-codes/#Italic","page":"Supported Codes","title":"Italic","text":"","category":"section"},{"location":"supported-codes/","page":"Supported Codes","title":"Supported Codes","text":"buf = IOBuffer()\nprint(buf, \"\\e[0m\", \"Normal \")\nprint(buf, \"\\e[3m\", \"Italic \")\nprint(buf, \"\\e[1m\", \"Bold-Italic \") # this keeps the \"italic\"\nprint(buf, \"\\e[23m\", \"Bold \")  # this keeps the \"bold\"\nprint(buf, \"\\e[0m\", \"Normal \")\nHTMLPrinter(buf, root_class=\"documenter-example-output\")","category":"page"},{"location":"supported-codes/#Underline-and-Strikethrough","page":"Supported Codes","title":"Underline and Strikethrough","text":"","category":"section"},{"location":"supported-codes/","page":"Supported Codes","title":"Supported Codes","text":"buf = IOBuffer()\nprint(buf, \"\\e[0m\", \"Normal \")\nprint(buf, \"\\e[4m\", \" Underline \", \"\\e[24m\", \" \")\nprint(buf, \"\\e[9m\", \" Striethrough \", \"\\e[29m\", \" \")\nprint(buf, \"\\e[4;9m\", \" Both \", \"\\e[m\")\nHTMLPrinter(buf, root_class=\"documenter-example-output\")","category":"page"},{"location":"supported-codes/#Invert","page":"Supported Codes","title":"Invert","text":"","category":"section"},{"location":"supported-codes/","page":"Supported Codes","title":"Supported Codes","text":"The invert code swaps the foreground and background colors. However, the support is limited. You will need to force the foreground and background colors to be switched manually, or convert the style afterwards using JavaScript etc.","category":"page"},{"location":"supported-codes/","page":"Supported Codes","title":"Supported Codes","text":"buf = IOBuffer()\nprint(buf, \"\\e[0m\", \"Normal \")\nprint(buf, \"\\e[7m\", \"Invert \")\nprint(buf, \"\\e[27m\", \"Normal \")\nprint(buf, \"\\e[7;100m\", \"GrayText? \") # not supported by default.css\nprint(buf, \"\\e[34m\", \"BlueBG? \") # not supported by default.css\nprint(buf, \"\\e[0m\", \"Normal \")\nHTMLPrinter(buf, root_class=\"documenter-example-output\")","category":"page"},{"location":"supported-codes/#Conceal","page":"Supported Codes","title":"Conceal","text":"","category":"section"},{"location":"supported-codes/","page":"Supported Codes","title":"Supported Codes","text":"buf = IOBuffer()\nprint(buf, \"\\e[0m\", \"Normal \")\nprint(buf, \"\\e[8m\", \"Conceal \")\nprint(buf, \"\\e[31;47m\", \"Red1 \") # this is still concealed\nprint(buf, \"\\e[0m\", \"Normal \")\nprint(buf, \"\\e[31;47m\", \"Red2 \")\nprint(buf, \"\\e[8m\", \"Conceal \")\nprint(buf, \"\\e[28m\", \"Red3 \")\nprint(buf, \"\\e[0m\", \"Normal \")\nHTMLPrinter(buf, root_class=\"documenter-example-output\")","category":"page"},{"location":"supported-codes/#colors","page":"Supported Codes","title":"16 colors","text":"","category":"section"},{"location":"supported-codes/","page":"Supported Codes","title":"Supported Codes","text":"The 16 colors correspond to the color symbols which can be specified in the argument of printstyled (e.g. :black, :red, :green, :light_blue). Their sRGB values are environment-dependent. This document defines their actual colors in a CSS file.","category":"page"},{"location":"supported-codes/#Basic-colors","page":"Supported Codes","title":"Basic colors","text":"","category":"section"},{"location":"supported-codes/","page":"Supported Codes","title":"Supported Codes","text":"buf = IOBuffer()\nfor fg in [30:37; 39] # foreground color\n    for bg in [40:47; 49] # background color\n        print(buf, \"\\e[$fg;$(bg)m  $fg; $bg \")\n    end\n    println(buf)\nend\nHTMLPrinter(buf, root_class=\"documenter-example-output\")","category":"page"},{"location":"supported-codes/#Light-colors","page":"Supported Codes","title":"Light colors","text":"","category":"section"},{"location":"supported-codes/","page":"Supported Codes","title":"Supported Codes","text":"buf = IOBuffer()\nfor fg in [90:97; 39] # foreground color\n    for bg in [100:107; 49] # background color\n        print(buf, \"\\e[$fg;$(bg)m  $fg;$bg \")\n    end\n    println(buf)\nend\nHTMLPrinter(buf, root_class=\"documenter-example-output\")","category":"page"},{"location":"supported-codes/#colors-2","page":"Supported Codes","title":"256 colors","text":"","category":"section"},{"location":"supported-codes/","page":"Supported Codes","title":"Supported Codes","text":"The 256 colors correspond to the integer codes which can be specified in the argument of printstyled.","category":"page"},{"location":"supported-codes/","page":"Supported Codes","title":"Supported Codes","text":"buf = IOBuffer()\nfor color in 0:15 # same as the 16 colors above.\n    print(buf, \"\\e[38;5;$color;48;5;$(color)m  \")\n    print(buf, \"\\e[49m\", lpad(color, 3), \" \")\n    color % 8 == 7 && println(buf)\nend\nfor color in 16:231 # 6 × 6 × 6 = 216 colors\n    (color - 16) % 12 == 0 && println(buf)\n    print(buf, \"\\e[38;5;$color;48;5;$(color)m  \")\n    print(buf, \"\\e[49m\", lpad(color, 3), \" \")\nend\nprintln(buf)\nfor color in 232:255 # grayscale in 24 steps\n    (color - 232) % 12 == 0 && println(buf)\n    print(buf, \"\\e[38;5;$color;48;5;$(color)m  \")\n    print(buf, \"\\e[49m\", lpad(color, 3), \" \")\nend\nprint(buf, \"\\e[m\")\nHTMLPrinter(buf, root_class=\"documenter-example-output\")","category":"page"},{"location":"supported-codes/#bit-colors","page":"Supported Codes","title":"24-bit colors","text":"","category":"section"},{"location":"supported-codes/","page":"Supported Codes","title":"Supported Codes","text":"buf = IOBuffer()\nprint(buf, \" \\e[48;2;56;152;38m  \\n\")\nprint(buf, \"\\e[48;2;203;60;51m  \")\nprint(buf, \"\\e[48;2;149;88;178m  \")\nprint(buf, \"\\e[49;38;2;64;99;216m  24-bit RGB\\e[m\")\nHTMLPrinter(buf, root_class=\"documenter-example-output\")","category":"page"},{"location":"reference/#Reference","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"HTMLPrinter","category":"page"},{"location":"reference/#ANSIColoredPrinters.HTMLPrinter","page":"Reference","title":"ANSIColoredPrinters.HTMLPrinter","text":"HTMLPrinter(buf::IO; root_class=\"\")\n\n\n\n\n\n","category":"type"},{"location":"#ANSIColoredPrinters","page":"Introduction","title":"ANSIColoredPrinters","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"ANSIColoredPrinters converts a UTF-8 text qualified by ANSI escape codes to another format. Currently, only conversion to an HTML (HTMLPrinter) is implemented.","category":"page"},{"location":"#Installation","page":"Introduction","title":"Installation","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"The package can be installed with the Julia package manager. Run:","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"import Pkg\nPkg.add(\"ANSIColoredPrinters\")","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"or, from the Julia REPL, type ] to enter the Pkg REPL mode and run:","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"pkg> add ANSIColoredPrinters","category":"page"},{"location":"#Usage","page":"Introduction","title":"Usage","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"All you need to do is to pass an IO object containing a UTF-8 text qualified by ANSI escape codes as the first argument of the constructor of HTMLPrinter. On environments which support \"text/html\" display (e.g. this Documenter's HTML output), the text is displayed as HTML with its ANSI escape codes are translated into HTML elements.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"using ANSIColoredPrinters\nusing Crayons\n\nbuf = IOBuffer()\nCrayons.print_logo(buf) # this outputs ANSI escape codes.\n\nprinter = HTMLPrinter(buf, root_class=\"documenter-example-output\")","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Perhaps your browser is displaying a colored logo, but the HTMLPrinter actually outputs HTML code that looks like:","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"htmlsrc = IOBuffer() # hide\nshow(htmlsrc, MIME\"text/html\"(), printer) # hide\nprint(String(take!(htmlsrc))[1:120], \"...\") # hide","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"In addition, the colors and text styles are controlled by the CSS in the host document (e.g. default.css).","category":"page"}]
}
