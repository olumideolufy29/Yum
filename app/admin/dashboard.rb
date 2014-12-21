ActiveAdmin.register_page "Dashboard" do

  menu priority: 1, label: proc{ I18n.t("active_admin.dashboard") }

  content title: proc{ I18n.t("active_admin.dashboard") } do

    columns do
      column do
        panel 'Signed up users' do
          h1 number_with_delimiter(User.count)
        end
      end
    end

         columns do
           column do
             panel 'Recent Users' do
               ul do
                 User.last(10).map do |user|
                   li link_to(user.email)
                  end
                end
              end
            end
          end
  end # content

end
