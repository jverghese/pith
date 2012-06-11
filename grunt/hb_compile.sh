inputdir=public/templates
outputdir=public/templates

for file in $inputdir/*.handlebars; do
  filename=$(basename "$file")
  name=${filename%.*}
  js=`handlebars $file -s`
  echo "define(['handlebars'], function (Handlebars) { return Handlebars.template($js); });" > $outputdir/$name.js
done
