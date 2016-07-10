#encoding: UTF-8

module ApplicationHelper

  def full_title(page_title)
    base_title = 'El Blog'
    if page_title.empty?
      base_title
    else
      "#{base_title} | #{page_title}"
    end
  end

  # Los métodos no necesitan paréntesis para definir los argumentos
  def image_meta page_image
    if page_image.empty?
      "/assets/img.png"
    else
      page_image
    end
  end

  def description_meta page_description
  	if page_description.empty?
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, voluptatum, dolore. Excepturi tempora voluptate, harum expedita. Facere aliquam, alias labore assumenda nesciunt accusantium voluptatum saepe, animi optio voluptate inventore quo."
    else
      page_description
    end
  end

end